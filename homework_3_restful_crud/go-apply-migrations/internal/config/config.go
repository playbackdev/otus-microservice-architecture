package config

import (
	"os"
)

type DatabaseConnection struct {
	DbHost string
	DbPort string
	DbName string
	DbUser string
	DbPass string
}

func GetDatabaseConfig() *DatabaseConnection {
	var cfg DatabaseConnection

	cfg.DbHost = os.Getenv("DB_HOST")
	if cfg.DbHost == "" {
		cfg.DbHost = "localhost"
	}

	cfg.DbPort = os.Getenv("DB_PORT")
	if cfg.DbPort == "" {
		cfg.DbPort = "5432"
	}

	cfg.DbName = os.Getenv("DB_NAME")
	if cfg.DbName == "" {
		cfg.DbName = "postgres"
	}

	cfg.DbUser = os.Getenv("DB_USER")
	if cfg.DbUser == "" {
		cfg.DbUser = "german"
	}

	cfg.DbPass = os.Getenv("DB_PASS")

	return &cfg
}
