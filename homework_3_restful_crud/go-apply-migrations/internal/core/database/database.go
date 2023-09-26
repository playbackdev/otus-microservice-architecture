package database

import (
	"context"
	"fmt"
	"github.com/go-pg/pg/v10"
	"go-apply-migrations/internal/config"
)

var db *pg.DB

func GetDb() *pg.DB {
	return db
}

func InitDatabase() error {
	dbConfig := config.GetDatabaseConfig()
	url := fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=%s",
		dbConfig.DbUser,
		dbConfig.DbPass,
		dbConfig.DbHost,
		dbConfig.DbPort,
		dbConfig.DbName,
		"disable", // ssl mode
	)
	fmt.Println(fmt.Sprintf("Connecting to %s ...", url))
	opt, err := pg.ParseURL(url)
	if err != nil {
		return err
	}

	db = pg.Connect(opt)
	err = db.Ping(context.Background())
	if err != nil {
		return err
	}

	return nil
}
