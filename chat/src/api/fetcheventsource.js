
export const fetchEventSource = (url, options) => {
    fetch(url, options)
      .then(response => {
        if (response.status === 200) {
          options.onopen && options.onopen()
          return response.body
        }
      })
      .then(rb => {
        const reader = rb.getReader()
          const push = () => {
            // done 为数据流是否接收完成，boolean
            // value 为返回数据，Uint8Array
            return reader.read().then(({done, value}) => {
              if (done) {
                options.onclose && options.onclose()
                return
              }
              options.onmessage && options.onmessage(new TextDecoder().decode(value))
              // 持续读取流信息
              return push()
            })
          }
          // 开始读取流信息
          return push()
      })
      .catch((e) => {
        options.error && options.error(e)
      })
  }