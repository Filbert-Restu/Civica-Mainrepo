import { z } from "zod";



export const updateProfileSchema = z.object({
    avatarUrl: z.string().url("URL tidak valid").optional(),
    name: z.string().min(3, "Nama minimal 3 karakter"),
    phone: z.string().min(10, "Nomor telepon minimal 10 karakter"),
    address: z.string().min(10, "Alamat minimal 10 karakter"),
});



export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;