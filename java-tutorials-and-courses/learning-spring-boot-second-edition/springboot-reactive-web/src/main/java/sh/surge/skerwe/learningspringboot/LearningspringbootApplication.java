package sh.surge.skerwe.learningspringboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.filter.HiddenHttpMethodFilter;

@SpringBootApplication
public class LearningspringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearningspringbootApplication.class, args);
	}

  @Bean
  HiddenHttpMethodFilter hiddenHttpMethodFilter() {
    return new HiddenHttpMethodFilter();
  }

}
