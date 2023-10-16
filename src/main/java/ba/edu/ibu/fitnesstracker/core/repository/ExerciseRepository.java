package ba.edu.ibu.fitnesstracker.core.repository;

import ba.edu.ibu.fitnesstracker.core.model.Exercise;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public class ExerciseRepository {
    private final List<Exercise> exercises;

    public ExerciseRepository() {
        this.exercises = Arrays.asList(
                new Exercise(1, "Lat Pulldown", "Lats", "It is typically performed seated, facing towards the machine, where you pull a long bar attached to the cable, towards your chest, and then slowly extend your arms back to starting position.")
        );
    }

    public List<Exercise> findAll() {
        return this.exercises;
    }

    public Exercise findById(int id) {
        return exercises.stream().filter(exercise -> exercise.getId() == id).findFirst().orElse(null);
    }
}
