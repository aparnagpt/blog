package aparnagpt.blogapp.model;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Blog {
    private Integer id;
    private String title;
    private String text;
    private LocalDate date;

    public Blog() {
    }

    public Blog(Integer id, String title, LocalDate date) {
        this.id = id;
        this.title = title;
        this.date = date;
    }

    public Blog(Integer id, String title, String text, LocalDate date) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.date = date;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getText() {
        return text;
    }

    public String getDate() {
        return date.format(DateTimeFormatter.ofPattern("d.M.yyyy"));
    }
}
