import React from 'react'
import {GitHubCalendar} from "react-github-calendar";

function GithubMap() {
  return (
    <div className="mt-10 overflow-x-auto ">
      <h2 className="text-sm font-semibold text-white mb-4">
        Contributions
      </h2>

      <GitHubCalendar
        username="Aaryany25"
        year="2026"
        blockSize={12.1}
        blockMargin={2.4}
        fontSize={13}
        colorScheme="dark"
        theme={{
          dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
        }}
        style={{ width: '100%', height: 'auto' }}
        className="min-w-full"
      />
    </div>
  )
}

export default GithubMap