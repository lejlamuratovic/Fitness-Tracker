package ba.edu.ibu.fitnesstracker.core.repository;

import ba.edu.ibu.fitnesstracker.core.model.Routine;
import ba.edu.ibu.fitnesstracker.core.model.User;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
<<<<<<< Updated upstream
public class UserRepository {

    private final List<User> users;

    public UserRepository() {
        this.users = Arrays.asList(
                new User(1, "Lejla", "Muratović", "lejla.muratovic@stu.ibu.edu.ba"),
                new User(2, "Lejla2", "Muratović2", "lejla.muratovic2@stu.ibu.edu.ba")
        );
    }

    public List<User> findAll() {
        return users;
    }

    public User findById(int id) {
        return users.stream().filter(user -> user.getId() == id).findFirst().orElse(null);
    }
=======
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);

>>>>>>> Stashed changes
}
