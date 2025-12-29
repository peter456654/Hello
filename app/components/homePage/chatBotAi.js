"use client"
import React, { useState } from 'react'
import { callChatbotApi } from '@/app/lib/chatbotClient.mjs'

const ChatBotAi = () => {
  const suggestions = [
            "What is Codework?",
            "What services does Codework offers?",
            "What industries does Codework serve?",
            "What products does Codework provide?",
            "How can I contact Codework?",
            "What courses and CPLC are available?"
  ]

  const [query, setQuery] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [sources, setSources] = useState([])
  const [followups, setFollowups] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (payload) => {
    const value = typeof payload === 'string' ? payload : query
    const trimmed = value.trim()

    if (!trimmed || trimmed.length < 3) {
      setError('Please enter at least 3 characters.')
      return
    }

    setError('')
    setIsLoading(true)
    setCurrentQuestion(trimmed)
    setAnswer('')
    setSources([])
    setFollowups([])

    try {
      const result = await callChatbotApi(trimmed)
      setAnswer(result.answer || '')
      setSources(result.sources || [])
      setFollowups(result.followups || [])
    } catch (err) {
      setError(err.message || 'Something went wrong while contacting the chatbot.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuggestionClick = (text) => {
    setQuery(text)
    handleSubmit(text)
  }

  const handleFollowupClick = (text) => {
    const cleaned = text.replace(/^\d+\.\s*/, '')
    setQuery(cleaned)
    handleSubmit(cleaned)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSubmit()
    }
  }

  const renderLinks = (text, keyPrefix) => {
    if (!text) return []

    const urlRegex = /((?:https?:\/\/|www\.)[^\s<]+)/gi
    const nodes = []
    let lastIndex = 0
    let match

    while ((match = urlRegex.exec(text))) {
      const before = text.slice(lastIndex, match.index)
      if (before) nodes.push(before)

      let url = match[1]
      let trailing = ''

      while (url && /[),.!?:;]+$/.test(url)) {
        trailing = url.slice(-1) + trailing
        url = url.slice(0, -1)
      }

      const href = url.startsWith('http') ? url : `https://${url}`

      nodes.push(
        <a
          key={`${keyPrefix}-${match.index}`}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          {url}
        </a>
      )

      if (trailing) nodes.push(trailing)

      lastIndex = match.index + match[1].length
    }

    const rest = text.slice(lastIndex)
    if (rest) nodes.push(rest)
    return nodes
  }

  const renderInline = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g)

    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const content = part.slice(2, -2)
        return (
          <span key={index} className="font-semibold">
            {renderLinks(content, `b-${index}`)}
          </span>
        )
      }

      return <span key={index}>{renderLinks(part, `t-${index}`)}</span>
    })
  }

  const renderAnswer = (text) => {
    if (!text) return null

    const paragraphs = text.split(/\n\s*\n/)

    return paragraphs.map((paragraph, index) => (
      <p
        key={index}
        className="text-sm md:text-base text-primary/90 leading-relaxed mb-3"
      >
        {renderInline(paragraph)}
      </p>
    ))
  }

  return (
    <section className="w-full bg-secondary py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl bg-white border border-primary/20 rounded-md shadow-lg px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-primary text-sm">
            ✦
          </span>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask us anything about CODEWORK"
            className="flex-1 bg-transparent outline-none text-secondary text-sm sm:text-base placeholder:text-gray-600"
          />
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-md bg-secondary text-primary text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Ask
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {suggestions.map((q, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSuggestionClick(q)}
              className="text-left bg-secondary border border-primary/10 rounded-md px-5 py-4 text-primary shadow-sm hover:border-primary transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {(currentQuestion || isLoading || answer || error) && (
          <div className="mt-10 max-w-4xl mx-auto text-left">
            {currentQuestion && (
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                {currentQuestion}
              </h2>
            )}

            {error && !isLoading && (
              <div className="mb-4 rounded-md border border-red-400 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            )}

            {isLoading && (
              <div className="animate-pulse">
                <div className="text-sm font-semibold text-primary/80 mb-3 flex items-center gap-2">
                  <span>AI Summary</span>
                  <span className="inline-flex items-center justify-center text-[10px] border border-primary/40 rounded-full h-4 w-4">
                    i
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-primary/10 rounded w-full" />
                  <div className="h-4 bg-primary/10 rounded w-11/12" />
                  <div className="h-4 bg-primary/10 rounded w-10/12" />
                  <div className="h-4 bg-primary/10 rounded w-9/12" />
                </div>
              </div>
            )}

            {!isLoading && answer && (
              <div className="space-y-5">
                <div className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                  <span>AI Summary</span>
                  <span className="inline-flex items-center justify-center text-[10px] border border-primary/40 rounded-full h-4 w-4">
                    i
                  </span>
                </div>
                <div>{renderAnswer(answer)}</div>

                {sources && sources.length > 0 && (
                  <div className="mt-4">
                    <div className="text-sm font-semibold text-primary mb-2">
                      Sources
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {sources.map((source, index) => {
                        const isObj = source && typeof source === 'object';
                        const name = isObj ? (source.name || source.url || '') : String(source).replace(/[`'"]/g, '').trim();
                        const url = isObj ? (source.url || '') : String(source).replace(/[`'"]/g, '').trim();
                        return (
                          <li key={`${name}-${index}`}>
                            <a
                              href={url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-400 hover:text-blue-300"
                            >
                              {name}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}

                {followups && followups.length > 0 && (
                  <div className="mt-8">
                    <div className="text-sm font-semibold text-primary mb-3">
                      Suggested follow-up questions
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-4 gap-3 md:gap-0">
                      {followups.map((item, index) => (
                        <button
                          key={`${item}-${index}`}
                          type="button"
                          onClick={() => handleFollowupClick(item)}
                          className="flex-1 border border-primary/40 px-6 py-4 text-sm md:text-base text-primary text-left rounded-none bg-transparent hover:bg-primary/5 transition-colors"
                        >
                          {item.replace(/^\d+\.\s*/, '')}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default ChatBotAi
