package ba.edu.ibu.fitnesstracker.core.service;

import ba.edu.ibu.fitnesstracker.core.api.mailsender.MailSender;
import ba.edu.ibu.fitnesstracker.core.model.Routine;
import ba.edu.ibu.fitnesstracker.core.repository.UserRepository;
<<<<<<< Updated upstream
=======
import ba.edu.ibu.fitnesstracker.core.repository.RoutineRepository;
import ba.edu.ibu.fitnesstracker.rest.dto.RoutineDTO;
import ba.edu.ibu.fitnesstracker.rest.dto.UserDTO;
import ba.edu.ibu.fitnesstracker.rest.dto.UserRequestDTO;
>>>>>>> Stashed changes
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ba.edu.ibu.fitnesstracker.core.model.User;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
<<<<<<< Updated upstream
=======
import java.util.Optional;
import java.util.Collections;
import java.util.ArrayList;

import static java.util.stream.Collectors.toList;
>>>>>>> Stashed changes

@Service
public class UserService {
    private final UserRepository userRepository;
    private final RoutineRepository routineRepository;

    @Autowired
    private MailSender sendgridSender;

    @Autowired
    private MailSender mailgunSender;

    public UserService(UserRepository userRepository, RoutineRepository routineRepository) {
        this.userRepository = userRepository;
        this.routineRepository = routineRepository;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(@PathVariable int id) {
        return userRepository.findById(id);
    }

    public List<RoutineDTO> getFavoriteRoutines(String userId) {
        Optional<User> user = userRepository.findById(userId);

        if (!user.isPresent()) {
            throw new ResourceNotFoundException("User with the given ID does not exist.");
        }

        List<Routine> favoriteRoutines = user.get().getFavoriteRoutines();

        if (favoriteRoutines == null) {
            return Collections.emptyList();
        }

        return favoriteRoutines.stream()
                .map(RoutineDTO::new)
                .collect(toList());
    }

    public void addRoutineToFavorites(String userId, String routineId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        List<Routine> favorites = user.getFavoriteRoutines();

        if (favorites == null) {
            favorites = new ArrayList<>();
            user.setFavoriteRoutines(favorites);
        }

        boolean routineAlreadyFavorited = favorites.stream()
                .anyMatch(routine -> routine.getId().equals(routineId));

        if (!routineAlreadyFavorited) {
            Routine routine = routineRepository.findById(routineId)
                    .orElseThrow(() -> new ResourceNotFoundException("Routine not found with id: " + routineId));
            favorites.add(routine);
            userRepository.save(user);
        } else {
            throw new IllegalStateException("Routine is already in the list of favorites.");
        }
    }


    public void removeRoutineFromFavorites(String userId, String routineId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException(("User not found with id: " + userId)));

        List<Routine> favorites = user.getFavoriteRoutines();

        Optional<Routine> routineToRemove = favorites.stream()
                .filter(routine -> routine.getId().equals(routineId))
                .findFirst();

        if (routineToRemove.isPresent()) {
            favorites.remove(routineToRemove.get());
            userRepository.save(user);
        } else {
            throw new ResourceNotFoundException("Routine is not in favorites list.");
        }
    }

    public String sendEmailToAllUsers(String message) {
        List<User> users = userRepository.findAll();
        return mailgunSender.send(users, message);
    }
}

