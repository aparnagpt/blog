package aparnagpt.blogapp.controller;

import aparnagpt.blogapp.model.Blog;
import aparnagpt.blogapp.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blogs")
public class BlogController {
    @Autowired
    private BlogService blogService;

    @PostMapping
    public ResponseEntity<Void> createBlog(@RequestBody Blog blog) {
        blogService.createBlog(blog);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public List<Blog> getBlogs() {
        return blogService.getBlogs();
    }

    @GetMapping("/{id}")
    public Blog getBlog(@PathVariable String id) {
        return blogService.getBlog(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlog(@PathVariable String id) {
        blogService.deleteBlog(id);
        return ResponseEntity.ok().build();
    }
}
