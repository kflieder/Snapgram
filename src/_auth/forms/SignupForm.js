import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupValidation } from '@/lib/validation';
import { Loader } from 'lucide-react';
import { useCreateUserAccount, useSignInAccount } from '@/lib/react-query/queriesAndMutations';
import { useUserContext } from '@/context/AuthContext';
const SignupForm = () => {
    const { toast } = useToast();
    const { mutateAsync: createUserAccount, isPending: isCreatingAccount } = useCreateUserAccount();
    const { mutateAsync: signInAccount, isPending: isSigningIn } = useSignInAccount();
    const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
    const navigate = useNavigate();
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            name: '',
            username: '',
            email: '',
            password: '',
        },
    });
    async function onSubmit(values) {
        const newUser = await createUserAccount(values);
        if (!newUser) {
            return toast({
                title: "Sign Up failed. Please try again."
            });
        }
        const session = await signInAccount({
            email: values.email,
            password: values.password,
        });
        if (!session) {
            return toast({
                title: "Sign In failed. Please try again."
            });
        }
        const isLoggedIn = await checkAuthUser();
        if (isLoggedIn) {
            form.reset();
            navigate('/');
        }
        else {
            return toast({ title: "Sign In failed. Please try again." });
        }
    }
    return (_jsx(Form, { ...form, children: _jsxs("div", { className: 'sm:w-420 flex-center flex-col', children: [_jsx("img", { src: "/assets/images/logo.svg", alt: "Logo" }), _jsx("h2", { className: 'h3-bold md:h2-bold pt-5 sm:pt-12', children: "Create a new username" }), _jsx("p", { className: 'text-light-3 small-medium md:base-regular mt-2', children: "To use Snapgram please enter your details" }), _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex flex-col gap-5 w-full mt-4", children: [_jsx(FormField, { control: form.control, name: "name", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Name" }), _jsx(FormControl, { children: _jsx(Input, { type: 'text', className: 'shad-input', ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "username", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Username" }), _jsx(FormControl, { children: _jsx(Input, { type: 'text', className: 'shad-input', ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "email", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Email" }), _jsx(FormControl, { children: _jsx(Input, { type: 'email', className: 'shad-input', ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "password", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Password" }), _jsx(FormControl, { children: _jsx(Input, { type: 'password', className: 'shad-input', ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(Button, { type: "submit", className: 'shad-button_primary', children: isCreatingAccount ?
                                _jsxs("div", { className: 'flex-center gap-2', children: [_jsx(Loader, {}), "Loading..."] }) : "Sign Up" }), _jsxs("p", { children: ["Already have an account?", _jsx(Link, { to: '/sign-in', className: 'text-primary-500 text-small-semibold ml-1', children: "Log In" })] })] })] }) }));
};
export default SignupForm;
