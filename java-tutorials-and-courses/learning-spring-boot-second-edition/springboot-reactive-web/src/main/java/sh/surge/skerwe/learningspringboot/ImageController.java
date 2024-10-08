package sh.surge.skerwe.learningspringboot;

import java.io.IOException;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Controller
public class ImageController {

  private static final String API_BASE_PATH = "api";

  private static final String BASE_PATH = "/images";
  private static final String FILENAME = "{filename:.+}";

  private final ImageService imageService;

  public ImageController(ImageService imageService) {
    this.imageService = imageService;
  }

  @GetMapping(API_BASE_PATH + "/images")
  Flux<Image> images() {
    return Flux.just(
      new Image("1", "learning-spring-boot-cover.jpg"),
      new Image("2", "learning-spring-boot-2nd-edition-cover.jpg"),
      new Image("3", "bazinga.png")
    );
  }

  @PostMapping(API_BASE_PATH + "/images")
  Mono<Void> create(@RequestBody Flux<Image> images) {
    return images
     .map(image -> {
       log.info("We will save " + image + " to a Reactive database soon!");
        return image;
     })
     .then();
  }

  @GetMapping(value = BASE_PATH + "/" + FILENAME + "/raw",
  produces = MediaType.IMAGE_JPEG_VALUE)
  @ResponseBody
  public Mono<ResponseEntity<?>> oneRawImage(
    @PathVariable String filename) {
      return imageService.findOneImage(filename)
        .map(resource -> {
          try {
            return ResponseEntity.ok()
            .contentLength(resource.contentLength())
            .body(new InputStreamResource(resource.getInputStream()));
          } catch (IOException e) {
              return ResponseEntity.badRequest()
              .body("Couldn't find " + filename + " => " + e.getMessage());
          }
      });
  }

  @PostMapping(value = BASE_PATH)
  public Mono<String> createFile(@RequestPart(name = "file")
   Flux<FilePart> files) {
     return imageService.createImage(files)
      .then(Mono.just("redirect:/"));
  }

  @DeleteMapping(BASE_PATH + "/" + FILENAME)
  public Mono<String> deleteFile(@PathVariable String filename) {
    return imageService.deleteImage(filename)
     .then(Mono.just("redirect:/"));
  }

  @GetMapping("/")
  public Mono<String> index(Model model) {
    model.addAttribute("images", imageService.findAllImages());
    return Mono.just("index");
  }

}
