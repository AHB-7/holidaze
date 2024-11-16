import { useForm, SubmitHandler } from "react-hook-form";
import {
    Form,
    FormInput,
    SubmitBtn,
    RegBtn,
    TwoInputsInRow,
    ErrorMessage,
} from "../../styles/layouts/nav";
import useFetch from "../../hooks/use-fetch";
import { ApiResponse, RegisterFormData, User } from "../../styles/auth/auth";

type RegisterProps = {
    login: (user: User, token: string) => void;
    toggleLoginModal: () => void;
};

// Register component
export const Register: React.FC<RegisterProps> = ({
    login,
    toggleLoginModal,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>();

    const { data, loading, error, fetchData } = useFetch<ApiResponse>(
        "https://v2.api.noroff.dev/auth/register",
        { method: "POST" }
    );

    const onSubmit: SubmitHandler<RegisterFormData> = (formData) => {
        fetchData({
            body: {
                ...formData,
                avatar: { url: formData.avatarUrl, alt: formData.avatarAlt },
                banner: { url: formData.bannerUrl, alt: formData.bannerAlt },
            },
        });
    };

    if (data?.accessToken && data.data) {
        login(data.data, data.accessToken);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Register</h2>

            {/* Email */}
            <FormInput
                {...register("email", {
                    required: "This field is required",
                    validate: (value) =>
                        value.endsWith("@stud.noroff.no") ||
                        "Email must be a stud.noroff.no address.",
                })}
                type="text"
                placeholder="Email"
            />
            {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}

            {/* Password */}
            <FormInput
                {...register("password", {
                    required: "Password is required.",
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters.",
                    },
                })}
                type="password"
                placeholder="Password"
            />
            {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}

            {/* Name */}
            <FormInput
                {...register("name", {
                    required: "Name is required.",
                    minLength: {
                        value: 8,
                        message:
                            "Name must be at least 8 characters and can not contain punctuation symbols apart from underscore(_).",
                    },
                })}
                type="text"
                placeholder="Name"
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

            {/* Bio */}
            <FormInput
                {...register("bio", {
                    validate: (value) =>
                        !value ||
                        value.length <= 160 ||
                        "Bio must be 160 characters or less",
                })}
                type="text"
                placeholder="Bio"
                maxLength={160}
            />
            {errors.bio && <ErrorMessage>{errors.bio.message}</ErrorMessage>}

            {/* Avatar URL and Alt */}
            <TwoInputsInRow>
                <FormInput
                    {...register("avatarUrl", {
                        validate: (value) =>
                            !value ||
                            /^https?:\/\/.+$/.test(value) ||
                            "Avatar URL must be a valid URL.",
                    })}
                    type="text"
                    placeholder="Avatar URL"
                />
                <FormInput
                    {...register("avatarAlt", {
                        validate: (value, { avatarUrl }) =>
                            !value ||
                            (avatarUrl && value.length <= 120) ||
                            "Avatar Alt Text must be less than 120 characters and requires Avatar URL.",
                    })}
                    type="text"
                    placeholder="Avatar Alt Text"
                />
            </TwoInputsInRow>
            {errors.avatarUrl && (
                <ErrorMessage>{errors.avatarUrl.message}</ErrorMessage>
            )}
            {errors.avatarAlt && (
                <ErrorMessage>{errors.avatarAlt.message}</ErrorMessage>
            )}

            {/* Banner URL and Alt */}
            <TwoInputsInRow>
                <FormInput
                    {...register("bannerUrl", {
                        validate: (value) =>
                            !value ||
                            /^https?:\/\/.+$/.test(value) ||
                            "Banner URL must be a valid URL.",
                    })}
                    type="text"
                    placeholder="Banner URL"
                />
                <FormInput
                    {...register("bannerAlt", {
                        validate: (value, { bannerUrl }) =>
                            !value ||
                            (bannerUrl && value.length <= 120) ||
                            "Banner Alt Text must be less than 120 characters and requires Banner URL.",
                    })}
                    type="text"
                    placeholder="Banner Alt Text"
                />
            </TwoInputsInRow>
            {errors.bannerUrl && (
                <ErrorMessage>{errors.bannerUrl.message}</ErrorMessage>
            )}
            {errors.bannerAlt && (
                <ErrorMessage>{errors.bannerAlt.message}</ErrorMessage>
            )}

            {error && <p>{error.message}</p>}
            {loading && <p>Loading...</p>}

            <SubmitBtn type="submit" disabled={loading}>
                Register
            </SubmitBtn>
            <RegBtn type="button" onClick={toggleLoginModal}>
                Back to Login
            </RegBtn>
        </Form>
    );
};
