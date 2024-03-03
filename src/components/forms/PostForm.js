import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import FileUploader from "../ui/shared/FileUploader";
import { PostValidation } from "@/lib/validation";
import { useCreatePost } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import { useToast } from "../ui/use-toast";
const PostForm = ({ post }) => {
    const { mutateAsync: createPost } = useCreatePost();
    const { user } = useUserContext();
    const { toast } = useToast();
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(PostValidation),
        defaultValues: {
            caption: post ? post?.capton : "",
            file: [],
            location: post ? post?.location : "",
            tags: post ? post.tags.join(',') : ''
        },
    });
    // 2. Define a submit handler.
    async function onSubmit(values) {
        const newPost = await createPost({
            ...values,
            userId: user.id,
        });
        if (!newPost) {
            toast({
                title: 'Please try again'
            });
        }
        navigate('/');
    }
    return (_jsx(Form, { ...form, children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex flex-col gap-9 w-full max-w-5xl", children: [_jsx(FormField, { control: form.control, name: "caption", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { className: "shad-form_label", children: "Caption" }), _jsx(FormControl, { children: _jsx(Textarea, { className: "shad-textarea custom-scrollbar", ...field }) }), _jsx(FormMessage, { className: "shad-form_message" })] })) }), _jsx(FormField, { control: form.control, name: "file", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { className: "shad-form_label", children: "Add Photos" }), _jsx(FormControl, { children: _jsx(FileUploader, { fieldChange: field.onChange, mediaUrl: post?.imageUrl }) }), _jsx(FormMessage, { className: "shad-form_message" })] })) }), _jsx(FormField, { control: form.control, name: "location", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { className: "shad-form_label", children: "Add Location" }), _jsx(FormControl, { children: _jsx(Input, { type: "text", className: "shad-input", ...field }) }), _jsx(FormMessage, { className: "shad-form_message" })] })) }), _jsx(FormField, { control: form.control, name: "tags", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { className: "shad-form_label", children: "Add Tags  (separated by comma \" , \")" }), _jsx(FormControl, { children: _jsx(Input, { type: "text", className: "shad-input", placeholder: "Art, Expression, Learn", ...field }) }), _jsx(FormMessage, { className: "shad-form_message" })] })) }), _jsxs("div", { className: "flex gap-4 items-center justify-end", children: [_jsx(Button, { type: "button", className: "shad-button_dark_4", children: "Cancel" }), _jsx(Button, { type: "submit", className: "shad-button_primary whitespace-nowrap", children: "Submit" })] })] }) }));
};
export default PostForm;
