package com.example.demo.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Taskdto {

	private long id;
	private String taskName;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

}
