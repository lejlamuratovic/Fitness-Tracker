package ba.edu.ibu.fitnesstracker.core.service;

import ba.edu.ibu.fitnesstracker.core.api.mailsender.MailSender;
import ba.edu.ibu.fitnesstracker.core.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ba.edu.ibu.fitnesstracker.core.model.User;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    private MailSender sendgridSender;

    @Autowired
    private MailSender mailgunSender;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(@PathVariable int id) {
        return userRepository.findById(id);
    }

    public String sendEmailToAllUsers(String message) {
        List<User> users = userRepository.findAll();
        return mailgunSender.send(users, message);
    }
}

