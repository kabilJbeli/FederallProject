package com.emailSchedule.federalProject.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer" })
public class TeacherAvailability {


	private Integer availabilityId;
	
	private LocalDateTime timeAvailability;
	
	private Boolean isNotTaken;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getAvailabilityId() {
		return availabilityId;
	}

	public void setAvailabilityId(Integer availabilityId) {
		this.availabilityId = availabilityId;
	}

	public LocalDateTime getTimeAvailability() {
		return timeAvailability;
	}

	public void setTimeAvailability(LocalDateTime timeAvailability) {
		this.timeAvailability = timeAvailability;
	}

	public Boolean getIsNotTaken() {
		return isNotTaken;
	}

	public void setIsNotTaken(Boolean isNotTaken) {
		this.isNotTaken = isNotTaken;
	}
	
}
