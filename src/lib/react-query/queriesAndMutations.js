import { QUERY_KEYS } from "@/lib/react-query/queryKeys";
import { useQuery, useMutation, useQueryClient, } from '@tanstack/react-query';
import { createPost, createUserAccount, getRecentPosts, signInAccount, signOutAccount } from '../appwrite/api';
export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user) => createUserAccount(user)
    });
};
export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user) => signInAccount(user),
    });
};
export const useSignOutAccount = () => {
    return useMutation({
        mutationFn: signOutAccount
    });
};
export const useCreatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (post) => createPost(post),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
            });
        },
    });
};
export const useGetRecentPosts = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
        queryFn: getRecentPosts,
    });
};
