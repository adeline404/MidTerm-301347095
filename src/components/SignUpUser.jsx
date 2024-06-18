import { useForm } from "react-hook-form";
import "./signupuser.css";

export default function SignUpUser() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="hook">
            <label className="hook__text">First Name</label>
            <input
                type="text"
                className="hook__input"
                {...register("firstName", { required: true })}
            />
            {errors.firstName && <p className="hook__error">First Name is required</p>}

            <label className="hook__text">Last Name</label>
            <input
                type="text"
                className="hook__input"
                {...register("lastName", { required: true })}
            />
            {errors.lastName && <p className="hook__error">Last Name is required</p>}

            <label className="hook__text">User Name</label>
            <input
                type="text"
                className="hook__input"
                {...register("userName", { required: true })}
            />
            {errors.userName && <p className="hook__error">User Name is required</p>}

            <label className="hook__text">Email</label>
            <input
                type="email"
                className="hook__input"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <p className="hook__error">Email is required and must be valid</p>}
            
            <label className="hook__text">Password</label>
            <input
                type="password"
                className="hook__input"
                {...register("password", { required: true })}
            />
            {errors.password && <p className="hook__error">Password is required</p>}
            
            <label className="hook__text">Confirm Password</label>
            <input
                type="password"
                className="hook__input"
                {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && <p className="hook__error">Confirm Password is required</p>}

            <button className="hook__button" type="submit">
                Submit
            </button>
        </form>
    );
}
