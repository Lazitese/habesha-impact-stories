
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { X, Upload, Image as ImageIcon, Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// Define the form schema with Zod
const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  shortDescription: z.string().min(10, "Short description must be at least 10 characters").max(150, "Short description cannot exceed 150 characters"),
  fullDescription: z.string().min(50, "Full description must be at least 50 characters"),
  category: z.enum(["ongoing", "completed"]),
  mainImageIndex: z.number().optional(),
  videoUrl: z.string().optional().or(z.literal(""))
});

export type ProjectFormValues = z.infer<typeof projectSchema> & {
  images: string[];
  id?: number;
};

interface ProjectFormProps {
  defaultValues?: Partial<ProjectFormValues>;
  onSubmit: (data: ProjectFormValues) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
}

const ProjectForm = ({ 
  defaultValues, 
  onSubmit, 
  onCancel, 
  isSubmitting = false 
}: ProjectFormProps) => {
  const [images, setImages] = useState<string[]>(defaultValues?.images || []);
  const [mainImageIndex, setMainImageIndex] = useState<number>(
    defaultValues?.mainImageIndex !== undefined ? defaultValues.mainImageIndex : 0
  );
  const [isUploading, setIsUploading] = useState(false);

  // Initialize the form with default values
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: defaultValues?.title || "",
      shortDescription: defaultValues?.shortDescription || "",
      fullDescription: defaultValues?.fullDescription || "",
      category: defaultValues?.category || "ongoing",
      videoUrl: defaultValues?.videoUrl || "",
      mainImageIndex: mainImageIndex
    }
  });

  // Update main image index in form when it changes
  useEffect(() => {
    form.setValue("mainImageIndex", mainImageIndex);
  }, [mainImageIndex, form]);

  // Handle image upload (simulated for now)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    setIsUploading(true);
    
    // Simulate uploading process
    setTimeout(() => {
      const newImages = [...images];
      
      Array.from(files).forEach(file => {
        // In a real app, this would be an API call to upload the file
        // For demo, we'll create object URLs for the selected files
        const imageUrl = URL.createObjectURL(file);
        newImages.push(imageUrl);
      });
      
      setImages(newImages);
      
      // If this is the first image, set it as main image
      if (newImages.length > 0 && mainImageIndex === -1) {
        setMainImageIndex(0);
      }
      
      setIsUploading(false);
      toast.success("Images uploaded successfully");
    }, 1000);
  };

  // Remove an image from the list
  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    
    // If we removed the main image, update the main image index
    if (index === mainImageIndex) {
      setMainImageIndex(newImages.length > 0 ? 0 : -1);
    } else if (index < mainImageIndex && mainImageIndex > 0) {
      // If we removed an image before the main image, update the index
      setMainImageIndex(mainImageIndex - 1);
    }
  };

  // Set an image as the main image
  const setAsMainImage = (index: number) => {
    setMainImageIndex(index);
  };

  // Handle form submission
  const handleSubmit = (values: z.infer<typeof projectSchema>) => {
    if (images.length === 0) {
      toast.error("Please upload at least one image");
      return;
    }
    
    const projectData: ProjectFormValues = {
      ...values,
      images,
      mainImageIndex: mainImageIndex
    };
    
    // Add id if it exists in defaultValues (for edit mode)
    if (defaultValues?.id) {
      projectData.id = defaultValues.id;
    }
    
    onSubmit(projectData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter project title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="shortDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Short Description 
                <span className="text-xs text-gray-500 ml-2">
                  (Displayed on project cards, max 150 characters)
                </span>
              </FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  placeholder="Enter a concise description for the project card"
                  rows={2} 
                />
              </FormControl>
              <div className="text-xs text-gray-500 text-right">
                {field.value?.length || 0}/150
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="fullDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Full Description
                <span className="text-xs text-gray-500 ml-2">
                  (Detailed description for the project page)
                </span>
              </FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  placeholder="Enter a detailed project description"
                  rows={6} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="space-y-2">
          <Label>Project Images</Label>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-2">
            {images.map((image, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative group aspect-square rounded-md overflow-hidden border-2",
                  mainImageIndex === index ? "border-brand" : "border-gray-200"
                )}
              >
                <img 
                  src={image} 
                  alt={`Project image ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex flex-col items-center space-y-2">
                    {mainImageIndex !== index && (
                      <Button 
                        type="button"
                        variant="outline" 
                        size="sm"
                        className="bg-white text-black hover:bg-white/90"
                        onClick={() => setAsMainImage(index)}
                      >
                        <Check className="mr-1 h-4 w-4" />
                        Set as main
                      </Button>
                    )}
                    
                    <Button 
                      type="button"
                      variant="outline" 
                      size="sm"
                      className="bg-red-500 text-white hover:bg-red-600 border-none"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <X className="mr-1 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                </div>
                
                {mainImageIndex === index && (
                  <div className="absolute top-1 right-1 bg-brand text-white rounded-full p-1 text-xs">
                    Main
                  </div>
                )}
              </div>
            ))}
            
            {/* Upload button tile */}
            <div className="aspect-square bg-gray-100 rounded-md border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-2 cursor-pointer hover:bg-gray-50 transition-colors">
              <Label 
                htmlFor="image-upload" 
                className="cursor-pointer flex flex-col items-center justify-center w-full h-full"
              >
                <Upload className="h-6 w-6 text-gray-400 mb-2" />
                <span className="text-sm text-gray-500 text-center">Upload Images</span>
                <input
                  id="image-upload"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                  disabled={isUploading}
                />
              </Label>
            </div>
          </div>
          
          {isUploading && (
            <div className="text-sm text-gray-500">Uploading images...</div>
          )}
          
          {images.length === 0 && !isUploading && (
            <div className="text-sm text-red-500">Please upload at least one image</div>
          )}
        </div>
        
        <FormField
          control={form.control}
          name="videoUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Video URL (Optional)
                <span className="text-xs text-gray-500 ml-2">
                  (YouTube embed URL, e.g., https://www.youtube.com/embed/...)
                </span>
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter YouTube embed URL" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end space-x-2 pt-4">
          <Button
            type="button"
            variant="outline" 
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button 
            type="submit"
            className="bg-brand hover:bg-brand/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : defaultValues?.id ? "Update Project" : "Add Project"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProjectForm;
