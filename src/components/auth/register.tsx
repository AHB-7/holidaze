import { Form, FormInput, RegBtn, SubmitBtn } from "../../styles/auth/auth";

export default function Register() {
    return (
        <Form>
            <h2>Register</h2>
            <FormInput type="text" name="email" placeholder="Email" required />
            <FormInput
                type="password"
                name="password"
                placeholder="Password"
                required
            />
            <FormInput type="text" name="name" placeholder="Name" required />
            <FormInput type="text" name="bio" placeholder="Bio" />
            <FormInput type="text" name="avatarUrl" placeholder="Avatar URL" />
            <FormInput
                type="text"
                name="avatarAlt"
                placeholder="Avatar Alt Text"
            />
            <FormInput type="text" name="bannerUrl" placeholder="Banner URL" />
            <FormInput
                type="text"
                name="bannerAlt"
                placeholder="Banner Alt Text"
            />
            <label>
                <input type="checkbox" name="venueManager" />
                Venue Manager
            </label>
            <SubmitBtn type="submit">Register</SubmitBtn>
            <RegBtn>Login</RegBtn>
        </Form>
    );
}
