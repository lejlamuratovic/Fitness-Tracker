package ba.edu.ibu.fitnesstracker.rest.controllers;

<<<<<<< Updated upstream
import ba.edu.ibu.fitnesstracker.core.model.User;
import ba.edu.ibu.fitnesstracker.core.service.UserService;
=======
import ba.edu.ibu.fitnesstracker.core.model.Routine;
import ba.edu.ibu.fitnesstracker.core.service.AuthService;
import ba.edu.ibu.fitnesstracker.core.service.UserService;
import ba.edu.ibu.fitnesstracker.rest.dto.PasswordRequestDTO;
import ba.edu.ibu.fitnesstracker.rest.dto.RoutineDTO;
import ba.edu.ibu.fitnesstracker.rest.dto.UserDTO;
import ba.edu.ibu.fitnesstracker.rest.dto.UserRequestDTO;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
>>>>>>> Stashed changes
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/users")
public class UserController {
    private final UserService userService;


    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> findAll() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public User findById(@PathVariable int id) {
        return userService.findById(id);
    }

    @GetMapping("/send-email")
    public String sendEmailToAllUsers(@RequestParam String message) {
        return userService.sendEmailToAllUsers(message);
    }

<<<<<<< Updated upstream
}
=======

    @RequestMapping(method = RequestMethod.PUT, path = "/password/{id}")
    public ResponseEntity<String> updatePassword(@PathVariable String id, @RequestBody PasswordRequestDTO passwordUpdateRequest) {
        try {
            authService.updateUserPassword(id, passwordUpdateRequest);
            return new ResponseEntity<>("Password updated successfully", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'MEMBER')")
    @RequestMapping(method = RequestMethod.GET, path="/{id}/favorite-routines")
    public ResponseEntity<List<RoutineDTO>> getFavoriteRoutines(@PathVariable String id) {
        return ResponseEntity.ok(userService.getFavoriteRoutines(id));
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'MEMBER')")
    @RequestMapping(method = RequestMethod.PUT, path="/{userId}/add-favorite/{routineId}")
    public ResponseEntity<Void> addRoutineToFavorites(@PathVariable String userId, @PathVariable String routineId) {
        userService.addRoutineToFavorites(userId, routineId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'MEMBER')")
    @RequestMapping(method = RequestMethod.PUT, path="/{userId}/remove-favorite/{routineId}")
    public ResponseEntity<Void> removeRoutineFromFavorites(@PathVariable String userId, @PathVariable String routineId) {
        userService.removeRoutineFromFavorites(userId, routineId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
>>>>>>> Stashed changes
