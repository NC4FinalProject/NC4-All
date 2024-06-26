package com.bit.envdev.repository;

import com.bit.envdev.entity.Section;
import com.bit.envdev.entity.SectionId;
import com.bit.envdev.entity.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SectionRepository extends JpaRepository<Section, SectionId> {
}
