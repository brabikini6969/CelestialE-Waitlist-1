import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { SuccessModal } from "./SuccessModal";

const formSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  termsAccepted: z.boolean()
    .refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      termsAccepted: false,
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([
          {
            name: values.name,
            email: values.email,
            terms_accepted: values.termsAccepted,
          },
        ]);

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already registered",
            description: "This email is already on our waitlist!",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        setShowSuccess(true);
        form.reset();
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto bg-background/60 backdrop-blur-md border border-primary/20 rounded-lg p-8 shadow-elegant"
      >
        <h2 className="text-3xl font-orbitron font-bold text-center mb-6 bg-gradient-cosmic bg-clip-text text-transparent">
          Join the Waitlist
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-inter">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-inter">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      {...field}
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="termsAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-foreground/80 font-inter">
                      I accept the{" "}
                      <a
                        href="/terms"
                        className="text-primary hover:underline"
                        target="_blank"
                      >
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy"
                        className="text-primary hover:underline"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-gradient-cosmic hover:shadow-glow transition-shadow duration-300 font-orbitron text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Joining...
                </>
              ) : (
                "Join Waitlist"
              )}
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm text-muted-foreground mt-6 font-inter">
          Already signed up?{" "}
          <a href="/contact" className="text-primary hover:underline">
            Contact us
          </a>
        </p>
      </motion.div>

      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  );
};
