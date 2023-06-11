export type Language = 'python' | 'go' | 'typescript'
// | 'java'
// | 'javascript'
// | 'c'
// | 'cpp'
// | 'csharp'
// | 'php'
// | 'ruby'
// | 'swift'
// | 'kotlin'
// | 'rust'
// | 'html'
// | 'css'
// | 'sql'
// | 'bash'

export type ProblemSize = 'short' | 'medium' | 'long' | undefined

export type GameState = {
    problem: number
    correct: number
    miss: number
    time: number
}

export type ProblemData = {
    // データの型を定義する
    // 例: id: number;
    id: number
    problem_name: string
    language: Language
    problem_size: ProblemSize
    words: string[]
    tab_counts: number[]
}
