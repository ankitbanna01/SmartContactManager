package com.scm.services;

import java.util.List;
import java.util.Optional;
import com.scm.entities.user;

public interface UserService {
    
    user savUser(user user);

    Optional<user> getUserById(String id);

    Optional<user> updateUser(user user);

    void deleteUser(String id);

    boolean isUserExit(String userId);

    boolean isUserExitByEmail(String email);

    List<user> getAllUsers();

    user getUserByEmail(String email);

}
