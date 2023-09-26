package main

import (
	"fmt"
	"go-apply-migrations/internal/core/database"
	"go-apply-migrations/internal/core/migrations"
	"os"
)

func main() {
	if err := database.InitDatabase(); err != nil {
		panic(err)
	}

	if err := migrations.Migrate(); err != nil {
		panic(err)
	}
	fmt.Println("Migrations applied successfully. Exit code 0")
	os.Exit(0)
}
