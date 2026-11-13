CREATE TABLE `posts_table` (
	`id` text PRIMARY KEY,
	`title` text NOT NULL,
	`slug` text NOT NULL UNIQUE,
	`excerpt` text NOT NULL UNIQUE,
	`content` text NOT NULL,
	`cover_image_url` text NOT NULL UNIQUE,
	`published` integer NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	`author` text NOT NULL
);
