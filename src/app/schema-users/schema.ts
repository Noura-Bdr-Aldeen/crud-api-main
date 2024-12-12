import { z } from 'zod';

export type User = z.infer<typeof UserSchema>;

export const UserSchema = z.object({
  username: z.string().refine(
    (val) => val.length >= 3,
    {
      message: "Username must be at least 3 characters long"
    }
  ),
  name: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}/, { message: "Invalid phone number" }),
  website: z.string().url({ message: "Invalid website URL" }),
  address: z.object({
    street: z.string(),
    city: z.string(),
    suite: z.string(),
    zipcode: z.string(),
    geo: z.object({
      lat: z.string(),
      lng: z.string()
    })
  }),
  company: z.object({
    name: z.string().min(1, { message: "Company name is required" }),
    catchPhrase: z.string(),
    bs: z.string()
  })
});
