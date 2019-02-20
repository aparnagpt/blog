package aparnagpt.blogapp.service;

import aparnagpt.blogapp.model.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Component
public class BlogService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void createBlog(Blog blog) {
        jdbcTemplate.update("INSERT INTO BLOG (TITLE, TEXT, DATE) VALUES (?, ?, NOW())", blog.getTitle(), blog.getText());
    }

    public List<Blog> getBlogs() {
        return jdbcTemplate.query("SELECT ID, TITLE, DATE FROM BLOG ORDER BY DATE",
                (rs, i) -> new Blog(rs.getInt("id"),
                        rs.getString("title"),
                        rs.getDate("date").toLocalDate()));
    }

    public Blog getBlog(String id) {
        return jdbcTemplate.query("SELECT ID, TITLE, TEXT, DATE FROM BLOG WHERE ID = ?", BlogService::mapToBlog, id)
                .stream()
                .findAny()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public void deleteBlog(String id) {
        jdbcTemplate.update("DELETE FROM BLOG WHERE ID = ?", id);
    }

    private static Blog mapToBlog(ResultSet rs, int index) throws SQLException {
        return new Blog(rs.getInt("id"),
                rs.getString("title"),
                rs.getString("text"),
                rs.getDate("date").toLocalDate());
    }
}
