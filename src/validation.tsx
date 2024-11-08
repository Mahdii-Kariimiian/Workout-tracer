import * as yup from "yup";

export const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(12).required(),
});

const createUser = async (event) => {
    event.preventDefault();
    let formData = {
        name: event.target[0].value,
        email: event.target[1].value,
        password: event.target[2].value,
    };
    console.log(formData);
    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
};

const Validation = () => {
    return (
        <div>
            <form onSubmit={createUser} action="">
                username:
                <input type="text" />
                email
                <input type="text" />
                pass
                <input type="text" />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default Validation;
