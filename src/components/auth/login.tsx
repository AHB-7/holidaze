import {
    Form,
    FormContainer,
    FormInput,
    RegBtn,
    SubmitBtn,
} from "../../styles/auth/auth";

export default function Login() {
    const handleLogin = (e) => {
        e.preventDefault();
    };
    return (
        <FormContainer>
            <Form>
                <h1>Login</h1>
                <FormInput
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <SubmitBtn type="submit" onSubmit={handleLogin}>
                    Login
                </SubmitBtn>
                <RegBtn>Register</RegBtn>
            </Form>
        </FormContainer>
    );
}
