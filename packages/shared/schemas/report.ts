import { z } from "zod";

export const reportSchema = z.object({
  description: z.string().min(10, "Deskripsi laporan minimal 10 karakter"),
  latitude: z.number({
    message: "Titik koordinat (Latitude) wajib diisi",
  }),
  longitude: z.number({
    message: "Titik koordinat (Longitude) wajib diisi",
  }),
  imageUrl: z.string().url("Format URL gambar tidak valid").optional(),
});

export type CreateReportInput = z.infer<typeof reportSchema>;