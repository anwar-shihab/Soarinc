import { z } from "zod";

export const userSchema = z.object({
  image: z.string(),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must be at most 50 characters long" }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores",
    }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least one special character",
    }),
  dateOfBirth: z
    .string()
    .refine((value) => !isNaN(Date.parse(value)), {
      message: "Invalid date format",
    })
    .refine(
      (value) => {
        const date = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();
        return age >= 18;
      },
      { message: "You must be at least 18 years old" }
    ),
  presentAddress: z
    .string()
    .min(5, { message: "Address must be at least 5 characters long" }),
  permanentAddress: z
    .string()
    .min(5, { message: "Address must be at least 5 characters long" }),
  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters long" }),
  postalCode: z
    .string()
    .min(4, { message: "Postal Code must be at least 4 characters long" })
    .regex(/^\d+$/, { message: "Postal Code must contain only numbers" }),
  country: z
    .string()
    .min(2, { message: "Country must be at least 2 characters long" }),
});

// export type UserSchema = z.infer<typeof userSchema>;
