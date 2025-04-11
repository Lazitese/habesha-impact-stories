
import { useState } from "react";
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Pencil, Trash2, Plus, Eye, 
  CheckCircle, Clock
} from "lucide-react";
import { 
  Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogFooter
} from "@/components/ui/dialog";
import { toast } from "sonner";
import ProjectForm, { ProjectFormValues } from "@/components/cms/ProjectForm";

// Sample projects data with the new structure (in a real app, this would come from API/database)
const sampleProjects = [
  {
    id: 1,
    title: "Clean Water Initiative",
    shortDescription: "Providing access to clean drinking water in rural communities.",
    fullDescription: "The Clean Water Initiative aimed to address the critical shortage of clean water in rural communities of the Amhara Region. Many residents had to walk several kilometers each day to collect water from unsafe sources, leading to waterborne diseases and limiting time for education and economic activities.\n\nFocus areas included constructing 10 deep wells across the region, installing water purification systems in each community, training local technicians to maintain the water systems, and educating communities on water conservation and hygiene practices.\n\nThe project has dramatically improved health outcomes in the target communities, with a 65% reduction in waterborne diseases in the first year after implementation. Children, particularly girls, now have more time to attend school instead of collecting water. Local committees have been established to maintain the systems, ensuring long-term sustainability.\n\nWe faced challenges with difficult terrain for drilling and initially low community engagement. Through persistent community outreach and adapting our technical approaches, we overcame these obstacles.",
    category: "completed",
    images: [
      "https://images.unsplash.com/photo-1626264146977-0d5839bb5dcd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469159604762-91202891c492?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528302570631-9123de048188?q=80&w=1000&auto=format&fit=crop"
    ],
    mainImageIndex: 0,
    videoUrl: "https://www.youtube.com/embed/XqZsoesa55w"
  },
  {
    id: 2,
    title: "Education for All",
    shortDescription: "Building schools and providing educational resources for every child.",
    fullDescription: "Education for All is our flagship program aimed at ensuring that every child, regardless of their socioeconomic background, has access to quality education. The program focuses on building and renovating schools, providing educational materials, and training teachers in underserved communities.\n\nSince its inception, the program has built 15 schools across various regions, benefiting over 5,000 children. We've also distributed thousands of textbooks, notebooks, and other learning materials, and provided teacher training to improve the quality of education.\n\nOur approach involves close collaboration with local communities, government agencies, and other stakeholders to ensure the program's sustainability and impact. We regularly monitor and evaluate the program to make necessary adjustments and improvements.",
    category: "ongoing",
    images: [
      "https://images.unsplash.com/photo-1613899889451-fa6699dfd94d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=1000&auto=format&fit=crop"
    ],
    mainImageIndex: 0,
    videoUrl: ""
  },
  {
    id: 3,
    title: "Healthcare Access Program",
    shortDescription: "Deploying mobile clinics and training healthcare workers for remote areas.",
    fullDescription: "Our Healthcare Access Program aims to provide essential medical services to remote and underserved areas where healthcare infrastructure is limited or non-existent. This multi-faceted program involves deploying mobile clinics, training community health workers, and establishing sustainable healthcare systems.\n\nMobile clinics are equipped with basic medical equipment and staffed by trained healthcare professionals. They travel to remote villages on a regular schedule, providing preventive care, primary healthcare services, maternal and child health services, and health education.\n\nWe also train community health workers from within the local population to provide basic healthcare services, health education, and to serve as a link between the community and the formal healthcare system. This approach ensures that healthcare services remain accessible even when the mobile clinics are not present.\n\nThe program also works on strengthening the existing healthcare systems by collaborating with local health authorities, advocating for improved healthcare policies, and helping to establish sustainable healthcare financing mechanisms.",
    category: "ongoing",
    images: [
      "https://images.unsplash.com/photo-1567427363205-9c3d5b657f7e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584515979956-b8be1a45f3e5?q=80&w=1000&auto=format&fit=crop"
    ],
    mainImageIndex: 0,
    videoUrl: ""
  }
];

const ProjectsManagement = () => {
  const [projects, setProjects] = useState(sampleProjects);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddProject = (projectData: ProjectFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call with a slight delay
    setTimeout(() => {
      // Create new project with generated ID
      const projectToAdd = {
        ...projectData,
        id: Math.max(0, ...projects.map(p => p.id)) + 1
      };

      setProjects([...projects, projectToAdd]);
      setIsAddDialogOpen(false);
      toast.success("Project added successfully");
      setIsSubmitting(false);
    }, 800);
  };

  const handleEditProject = (projectData: ProjectFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call with a slight delay
    setTimeout(() => {
      // Update project
      setProjects(projects.map(p => 
        p.id === projectData.id ? projectData : p
      ));
      
      setIsEditDialogOpen(false);
      toast.success("Project updated successfully");
      setIsSubmitting(false);
    }, 800);
  };

  const handleDeleteProject = () => {
    if (!currentProject) return;
    
    setIsSubmitting(true);
    
    // Simulate API call with a slight delay
    setTimeout(() => {
      // Remove project
      setProjects(projects.filter(p => p.id !== currentProject.id));
      setIsDeleteDialogOpen(false);
      toast.success("Project deleted successfully");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Projects Management</h1>
        <Button 
          onClick={() => setIsAddDialogOpen(true)}
          className="bg-brand hover:bg-brand/90"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded overflow-hidden">
                      <img 
                        src={project.images[project.mainImageIndex]} 
                        alt={project.title} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span>{project.title}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {project.category === "completed" ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-green-500">Completed</span>
                      </>
                    ) : (
                      <>
                        <Clock className="mr-2 h-4 w-4 text-amber-500" />
                        <span className="text-amber-500">Ongoing</span>
                      </>
                    )}
                  </div>
                </TableCell>
                <TableCell className="max-w-md">
                  <p className="truncate">{project.shortDescription}</p>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => window.open(`/projects/${project.id}`, '_blank')}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        setCurrentProject(project);
                        setIsEditDialogOpen(true);
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-red-500 hover:text-red-600"
                      onClick={() => {
                        setCurrentProject(project);
                        setIsDeleteDialogOpen(true);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add Project Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Project</DialogTitle>
          </DialogHeader>
          <ProjectForm 
            onSubmit={handleAddProject}
            onCancel={() => setIsAddDialogOpen(false)}
            isSubmitting={isSubmitting}
          />
        </DialogContent>
      </Dialog>

      {/* Edit Project Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          {currentProject && (
            <ProjectForm 
              defaultValues={currentProject}
              onSubmit={handleEditProject}
              onCancel={() => setIsEditDialogOpen(false)}
              isSubmitting={isSubmitting}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Project</DialogTitle>
          </DialogHeader>
          <p className="py-4">
            Are you sure you want to delete "{currentProject?.title}"? This action cannot be undone.
          </p>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsDeleteDialogOpen(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDeleteProject}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsManagement;
