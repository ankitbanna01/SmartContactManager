package com.scm.validators;

// import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class FileValidator implements ConstraintValidator<ValidFile, MultipartFile> {

    // @Value("${multipart.max-file-size}")
    // private static long MAX_FILE_SIZE;

    // @Value("${multipart.max-request-size}")
    // private static long MIN_FILE_SIZE;

    private static final long MAX_FILE_SIZE = 1024 * 1024 * 10; // 2MB

    @Override
    public boolean isValid(MultipartFile file, ConstraintValidatorContext context) {
        if (file == null || file.isEmpty()) {

            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate("File cannot be empty").addConstraintViolation();
            return true;

        }

        // file size

        System.out.println("file size: " + file.getSize());

        if (file.getSize() > MAX_FILE_SIZE) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate("File size should be less than 10MB").addConstraintViolation();
            return false;
        }

        // resolution

        // try {
        // BufferedImage bufferedImage = ImageIO.read(file.getInputStream());

        // if(bufferedImage.getHe)

        // } catch (IOException e) {
        // // TODO Auto-generated catch block
        // e.printStackTrace();
        // }
        return true;

    }

}
