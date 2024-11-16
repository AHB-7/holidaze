import { useForm, SubmitHandler } from "react-hook-form";
import {
    Form,
    FormInput,
    SubmitBtn,
    RegBtn,
    ErrorMessage,
} from "../../styles/layouts/nav";
import useFetch from "../../hooks/use-fetch";
import {
    ApiResponseLogin,
    LoginFormData,
    UserLogin,
} from "../../styles/auth/auth";

// Props for the Login Component
type LoginProps = {
    login: (user: UserLogin, token: string) => void;
    toggleRegisterModal: () => void;
};

export const Login: React.FC<LoginProps> = ({ login, toggleRegisterModal }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();

    const { data, loading, error, fetchData } = useFetch<ApiResponseLogin>(
        "https://v2.api.noroff.dev/auth/login",
        { method: "POST" }
    );

    const onSubmit: SubmitHandler<LoginFormData> = (formData) => {
        fetchData({
            body: formData,
        });
    };

    if (data?.accessToken && data.data) {
        login(data.data, data.accessToken);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
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

            {error && <p>{error.message}</p>}
            {loading && <p>Loading...</p>}

            <SubmitBtn type="submit" disabled={loading}>
                Login
            </SubmitBtn>
            <RegBtn type="button" onClick={toggleRegisterModal}>
                Register
            </RegBtn>
        </Form>
    );
};
