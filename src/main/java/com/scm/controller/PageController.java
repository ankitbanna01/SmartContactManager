package com.scm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.scm.entities.user;
import com.scm.forms.UserForm;
import com.scm.helper.Message;
import com.scm.helper.MessageType;
import com.scm.services.UserService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("/scm")
public class PageController {

  @Autowired
  private UserService userService;

  @RequestMapping("/home")
  public String home(Model model) {
    model.addAttribute("Name", "Banna");
    model.addAttribute("fname", "Ankit");
    System.out.println("Home Page Handler");
    return "home";
  }

  @RequestMapping("/about")
  public String about(Model model) {
    model.addAttribute("Name", "Banna");
    model.addAttribute("fname", "Ankit");
    System.out.println("Home Page Handler");
    return "about";
  }

  @RequestMapping("/services")
  public String services(Model model) {
    model.addAttribute("Name", "Banna");
    model.addAttribute("fname", "Ankit");
    System.out.println("Home Page Handler");
    return "services";
  }

  @GetMapping("/contact")
  public String contact() {

    return "contact";
  }

  // this is login
  @GetMapping("/")
  public String login() {

    return "login";
  }

  // this is registretion
  @GetMapping("/register")
  public String register(Model model) {
    UserForm userForm = new UserForm();
    // userFrom.setName("ANkit");
    model.addAttribute("userForm", userForm);

    return "register";
  }

  // This is for do register
  @RequestMapping(value = "/do-register", method = RequestMethod.POST)
  public String processRegister(@Valid @ModelAttribute UserForm userForm, BindingResult rBindingResult,
      HttpSession session) {
    System.out.println("Processing registration");
    // fetch form data
    // UserForm
    System.out.println(userForm);

    // validate form data
    if (rBindingResult.hasErrors()) {
      return "register";
    }

    // TODO::Validate userForm[Next Video]

    // save to database

    // userservice

    // UserForm--> User
    // User user = User.builder()
    // .name(userForm.getName())
    // .email(userForm.getEmail())
    // .password(userForm.getPassword())
    // .about(userForm.getAbout())
    // .phoneNumber(userForm.getPhoneNumber())
    // .profilePic(
    // "https://www.learncodewithdurgesh.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdurgesh_sir.35c6cb78.webp&w=1920&q=75")
    // .build();

    user user = new user();
    user.setName(userForm.getName());
    user.setEmail(userForm.getEmail());
    user.setPassword(userForm.getPassword());
    user.setAbout(userForm.getAbout());
    user.setPhoneNumber(userForm.getPhoneNumber());
    user.setEnabled(false);
    user.setProfilePic(
        "https://www.learncodewithdurgesh.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdurgesh_sir.35c6cb78.webp&w=1920&q=75");

    userService.savUser(user);

    System.out.println("user saved :");

    // message = "Registration Successful"

    // add the message:

    Message message = Message.builder().content("Registration Successful").type(MessageType.green).build();

    session.setAttribute("message", message);

    // redirectto login page
    return "redirect:/register";
  }

}
