import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  exampleBlogPosts = [
    {
      id: 1,
      img:
        "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      headline: "A Book Review: Skin in the Game",
      post: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum dolor pulvinar lorem placerat tempor. Donec sollicitudin porta tempus. Donec ultricies id dui et bibendum. Aliquam erat volutpat. Nunc ut facilisis urna, non volutpat ligula. Cras sodales viverra sem. Fusce lacus justo, imperdiet eget consequat quis, varius a tellus.

Phasellus eu ultricies felis. Maecenas non nisi porta, tristique tortor vel, pharetra nulla. Suspendisse potenti. Suspendisse pulvinar placerat tellus sit amet porta. Nam imperdiet nibh in auctor molestie. Nulla facilisi. Aenean congue egestas orci, sit amet consequat arcu pulvinar in. Mauris euismod laoreet augue, posuere vehicula neque vulputate eget. Nam vitae risus quam. Quisque a luctus mi. Duis sodales, ex vitae venenatis pharetra, justo nulla molestie nunc, et vulputate neque libero sit amet enim.

Nulla facilisi. Curabitur id porttitor lectus, ut elementum elit. Phasellus id blandit neque. Nam enim massa, vestibulum non erat non, fringilla rutrum risus. Aliquam in enim sit amet nunc mollis laoreet scelerisque dignissim ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris euismod metus dolor, quis consequat ex blandit consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent consequat a libero in aliquam. Fusce bibendum libero eu tortor sollicitudin pulvinar.

Integer nibh velit, porttitor at eleifend quis, dapibus dignissim mi. Aliquam finibus sit amet massa et mollis. Morbi cursus sagittis orci, id molestie turpis luctus vel. Praesent eu sem mi. Phasellus eleifend tempor lectus. Proin scelerisque ante nec turpis malesuada, quis vehicula diam ultrices. Maecenas egestas, odio nec rutrum egestas, lacus dui consequat urna, lobortis vestibulum diam elit vitae dui.

Proin at efficitur odio, in bibendum risus. Mauris tincidunt egestas feugiat. Vestibulum nec est at nunc mattis consectetur eget id nunc. Vivamus arcu diam, semper sit amet euismod sit amet, ornare vel massa. Quisque at elementum eros. Etiam pulvinar, est et aliquet dignissim, felis metus varius ex, quis egestas risus elit sed risus. Etiam faucibus lacinia ex, at elementum ex sodales vel. Proin facilisis eget metus ac blandit. Praesent accumsan mi nulla, eu semper ante pretium vitae.
      `,
      dateAdded: "June 13th, 2019",
      author: "Grant Fogle"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
