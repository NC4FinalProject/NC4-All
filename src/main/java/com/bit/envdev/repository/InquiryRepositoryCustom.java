package com.bit.envdev.repository;

import com.bit.envdev.entity.Inquiry;
import com.bit.envdev.entity.Notice;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface InquiryRepositoryCustom {

    Page<Inquiry> searchAllByContentsId(Pageable pageable, String searchCondition, String searchKeyword, int contentsId);

    Page<Inquiry> myInquiries(Pageable pageable, String searchCondition, String searchKeyword, int contentsId, long memberId);
}
