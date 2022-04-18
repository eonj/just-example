package com.example.just.api.info

import org.springframework.http.MediaType
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody

@Controller
@RequestMapping(path = ["/info", "/api/info"])
class InfoApiController {

    @ResponseBody
    @GetMapping(produces = [MediaType.TEXT_PLAIN_VALUE])
    fun getInfo(): String {
        return "hello, world"
    }
}
