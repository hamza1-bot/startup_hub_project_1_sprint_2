package com.startup.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.startup.model.Post;

@Transactional
@Repository
public class PostDAO {
	
	@Autowired
	EntityManager entityManager; 

	
	public Post save(Post post) {
		return entityManager.merge(post);
	}
	
	
	@SuppressWarnings("unchecked")
	public List<Post> getUserPostList(Long userId) {
		return entityManager.createQuery("from Post where user="+userId).getResultList();
	}

}
