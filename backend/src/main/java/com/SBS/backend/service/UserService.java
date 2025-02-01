package com.SBS.backend.service;

import com.SBS.backend.entity.User;
import com.SBS.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    //kullanıcı oluşturma
    public User create(User user){
        return userRepository.save(user);
    }

    // kullanıcıları id'ye göre sıralama ve gösterme
    public List<User> getUsers(){
        Sort sort = Sort.by(Sort.Direction.DESC,"userId");
        return userRepository.findAll(sort);
    }

    //id'ye göre kullanıcı getirme
    public User getUserById(Long userId){
        return userRepository.findById(userId).get();
    }

    //id'ye göre kullanıcı silme
    public boolean deleteUser(Long userId){
        try{
            userRepository.deleteById(userId);
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    // id'ye göre kullanıcı güncelleme
    public User updateUserById(User user){
        try{
            userRepository.save(user);
            return getUserById(user.getUserId());
        }catch (Exception e){
            e.printStackTrace();
            return new User();
        }
    }
}
