import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BlogComponent } from "./blog/blog.component";
import { BlogPostComponent } from "./blog/blog-post/blog-post.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "blog", component: BlogComponent },
  { path: "blog/:id", component: BlogPostComponent },
  { path: "projects", component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
