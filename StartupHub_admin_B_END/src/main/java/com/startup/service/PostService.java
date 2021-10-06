package com.startup.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.startup.dao.PostDAO;
import com.startup.model.Post;

@Service
public class PostService {
	
	@Autowired
	PostDAO postDAO;
	
	public Post save(Post post) {
		return postDAO.save(post);
	}

	public List<Post> getUserPostList(Long userId) {
		return postDAO.getUserPostList(userId);
	}
}
