
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample projects data (in a real app, this would come from API/database)
const sampleProjects = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description: "Providing access to clean drinking water by building wells and water purification systems in rural communities.",
    category: "completed",
    image: "https://images.unsplash.com/photo-1626264146977-0d5839bb5dcd?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Education for All",
    description: "Building schools and providing educational resources to ensure every child has access to quality education.",
    category: "ongoing",
    image: "https://images.unsplash.com/photo-1613899889451-fa6699dfd94d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Healthcare Access Program",
    description: "Deploying mobile clinics and training healthcare workers to provide essential medical services in remote areas.",
    category: "ongoing",
    image: "https://images.unsplash.com/photo-1567427363205-9c3d5b657f7e?q=80&w=1000&auto=format&fit=crop"
  }
];

const ProjectsManagement = () => {
  const [projects, setProjects] = useState(sampleProjects);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    category: "ongoing",
    image: ""
  });

  const handleAddProject = () => {
    // Validate form inputs
    if (!newProject.title || !newProject.description || !newProject.image) {
      toast.error("Please fill out all fields");
      return;
    }

    // Create new project with generated ID
    const projectToAdd = {
      ...newProject,
      id: Math.max(0, ...projects.map(p => p.id)) + 1
    };

    setProjects([...projects, projectToAdd]);
    setIsAddDialogOpen(false);
    toast.success("Project added successfully");
    
    // Reset form
    setNewProject({
      title: "",
      description: "",
      category: "ongoing",
      image: ""
    });
  };

  const handleEditProject = () => {
    if (!currentProject) return;

    // Validate form inputs
    if (!currentProject.title || !currentProject.description || !currentProject.image) {
      toast.error("Please fill out all fields");
      return;
    }

    // Update project
    setProjects(projects.map(p => 
      p.id === currentProject.id ? currentProject : p
    ));
    
    setIsEditDialogOpen(false);
    toast.success("Project updated successfully");
  };

  const handleDeleteProject = () => {
    if (!currentProject) return;
    
    // Remove project
    setProjects(projects.filter(p => p.id !== currentProject.id));
    setIsDeleteDialogOpen(false);
    toast.success("Project deleted successfully");
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
                        src={project.image} 
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
                  <p className="truncate">{project.description}</p>
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
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Add New Project</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                value={newProject.title}
                onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                placeholder="Enter project title"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Status</Label>
              <Select 
                value={newProject.category} 
                onValueChange={(value) => setNewProject({...newProject, category: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                value={newProject.image}
                onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                placeholder="Enter image URL"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newProject.description}
                onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                placeholder="Enter project description"
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAddProject} className="bg-brand hover:bg-brand/90">Save Project</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Project Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          {currentProject && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-title">Project Title</Label>
                <Input
                  id="edit-title"
                  value={currentProject.title}
                  onChange={(e) => setCurrentProject({...currentProject, title: e.target.value})}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-category">Status</Label>
                <Select 
                  value={currentProject.category} 
                  onValueChange={(value) => setCurrentProject({...currentProject, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-image">Image URL</Label>
                <Input
                  id="edit-image"
                  value={currentProject.image}
                  onChange={(e) => setCurrentProject({...currentProject, image: e.target.value})}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  value={currentProject.description}
                  onChange={(e) => setCurrentProject({...currentProject, description: e.target.value})}
                  rows={4}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleEditProject} className="bg-brand hover:bg-brand/90">Update Project</Button>
          </DialogFooter>
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
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
            <Button 
              variant="destructive" 
              onClick={handleDeleteProject}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsManagement;
