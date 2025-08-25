/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ProfileImg from "@/assets/images/BannerImg2.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useUpdateUserProfileMutation } from "@/redux/features/auth/auth.api";
import { useGetUserProfileQuery } from "@/redux/features/user/user.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import PasswordInput from "../ui/PasswordInput";
import { ProfileSchema, type ProfileFormValues } from "@/types/ProfileSchema";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router";

export function MyProfileForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { data: userData, isLoading } = useGetUserProfileQuery(undefined);
  const [updateProfile] = useUpdateUserProfileMutation();
  const navigate = useNavigate();


  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileSchema) as any,
    defaultValues: {
      name: "",
      phone: "",
      oldPassword: "",
      newPassword: "",
    },
  });

  useEffect(() => {
    if (userData?.data) {
      form.reset({
        name: userData.data.name || "",
        phone: userData.data.phone || "",
        oldPassword: "",
        newPassword: "",
      });
    }
  }, [userData, form]);

  const onSubmit = async (data: ProfileFormValues) => {
    const toastId = toast.loading("Updating profile...");
    try {
      await updateProfile(data).unwrap();
      toast.success("Profile updated successfully!", { id: toastId });
      navigate("/user/transaction");
      form.reset();
    } catch (error: any) {
      toast.error(`${error.data?.message || "Failed to update profile"}`, {
        id: toastId,
      });
      console.log(error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="p-6 md:p-8 flex flex-col gap-6"
            >
              {isLoading ? (
                // Skeleton for the entire form
                <div className="flex flex-col gap-4">
                  {/* Title skeleton */}
                  <Skeleton height={30} width={200} baseColor="#202020" highlightColor="#444" />

                  {/* Subtitle skeleton */}
                  <Skeleton height={20} width={250} baseColor="#202020" highlightColor="#444" />

                  {/* Name field */}
                  <Skeleton height={40} baseColor="#202020" highlightColor="#444" />

                  {/* Phone field */}
                  <Skeleton height={40} baseColor="#202020" highlightColor="#444" />

                  {/* Password field */}
                  <Skeleton height={40} baseColor="#202020" highlightColor="#444" />
                  <Skeleton height={40} baseColor="#202020" highlightColor="#444" />
                  <Skeleton height={40} baseColor="#202020" highlightColor="#444" />

                  {/* Submit button */}
                  <Skeleton height={50} baseColor="#202020" highlightColor="#444" />
                </div>
              ) : (
                <>
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">Update Profile</h1>
                    <p className="text-muted-foreground text-balance">
                      Update your profile information
                    </p>
                  </div>

                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input  placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Phone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Old Password */}
                  <FormField
                    control={form.control}
                    name="oldPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Old Password</FormLabel>
                        <FormControl>
                          <PasswordInput {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* New Password */}
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <PasswordInput {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full cursor-pointer text-white"
                  >
                    Update
                  </Button>
                </>
              )}
            </form>
          </Form>
          {/* Right-side Image */}
          <div className="bg-muted relative hidden md:block">
            <img
              src={ProfileImg}
              alt="Profile"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
