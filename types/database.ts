export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      sermons: {
        Row: {
          id: string
          title: string
          slug: string
          speaker: string | null
          date: string
          passage: string | null
          tags: string[] | null
          youtube_url: string
          transcript: string | null
          refined_text: string | null
          summary: string | null
          outline: string | null
          duration: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          speaker?: string | null
          date: string
          passage?: string | null
          tags?: string[] | null
          youtube_url: string
          transcript?: string | null
          refined_text?: string | null
          summary?: string | null
          outline?: string | null
          duration?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          speaker?: string | null
          date?: string
          passage?: string | null
          tags?: string[] | null
          youtube_url?: string
          transcript?: string | null
          refined_text?: string | null
          summary?: string | null
          outline?: string | null
          duration?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      events: {
        Row: {
          id: string
          title: string
          description: string | null
          date_start: string
          date_end: string | null
          location: string | null
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          date_start: string
          date_end?: string | null
          location?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          date_start?: string
          date_end?: string | null
          location?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          role: 'public' | 'member' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          role?: 'public' | 'member' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          role?: 'public' | 'member' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
