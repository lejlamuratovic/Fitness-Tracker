package ba.edu.ibu.fitnesstracker.core.repository;

import ba.edu.ibu.fitnesstracker.core.model.WorkoutLog;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface WorkoutLogRepository extends MongoRepository<WorkoutLog, String> {
    List<WorkoutLog> findWorkoutLogsByUserId(String userId);
}
