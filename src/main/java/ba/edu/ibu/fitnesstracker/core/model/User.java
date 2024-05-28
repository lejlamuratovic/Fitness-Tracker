package ba.edu.ibu.fitnesstracker.core.model;

public class User {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
<<<<<<< Updated upstream

    public User(int id, String firstName, String lastName, String email) {
=======
    private String password;
    private Date creationDate;
    private List<Routine> favoriteRoutines;

    public User() {
    }

    public User(String id, UserType userType, String firstName, String lastName, String email, String password,
            Date creationDate, List<Routine> favouriteRoutines) {
>>>>>>> Stashed changes
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
<<<<<<< Updated upstream
=======
        this.password = password;
        this.creationDate = creationDate;
        this.favoriteRoutines = favouriteRoutines;
>>>>>>> Stashed changes
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
<<<<<<< Updated upstream
=======

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    public List<Routine> getFavoriteRoutines() {
        return favoriteRoutines;
    }

    public void setFavoriteRoutines(List<Routine> favoriteRoutines) {
        this.favoriteRoutines = favoriteRoutines;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(userType.name()));
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void setPassword(String password) {
        this.password = password;
    }

>>>>>>> Stashed changes
}


