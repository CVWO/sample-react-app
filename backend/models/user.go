package models

import "fmt"

type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

func (user *User) Greet() string {
	return fmt.Sprintf("Hello, I am %s", user.Name)
}
