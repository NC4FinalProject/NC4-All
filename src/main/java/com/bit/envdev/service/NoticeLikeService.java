package com.bit.envdev.service;

import com.bit.envdev.entity.Member;

public interface NoticeLikeService {

    long addOrdown(long id, Long noticeNo);

    long findByNoticeId(Long noticeNo);

    void insertLike(Member member, Long noticeNo);
}
